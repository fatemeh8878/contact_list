import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../slices/favoritesSlice";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  TextField,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useGetUsersQuery } from "../services/usersApi";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface RootState {
  favorites: number[];
}

const FavoriteUsers = () => {
  const { data: users } = useGetUsersQuery();
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");

  const favoriteUsers = users?.filter(
    (user) =>
      favorites.includes(user.id) &&
      (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Typography variant="h5" sx={{ mt: 3, mb: 2, color: "#F44336" }}>
        ❤️ کاربران علاقه‌مند
      </Typography>

      <TextField
        label="جستجو در علاقه‌مندی‌ها"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Grid container spacing={3}>
        {favoriteUsers && favoriteUsers?.length > 0 ? (
          favoriteUsers?.map((user: User) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card sx={{ backgroundColor: "#F44336", color: "#fff" }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar
                        sx={{ backgroundColor: "#fff", color: "#F44336" }}
                      >
                        {user.name[0]}
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6">{user.name}</Typography>
                      <Typography variant="body2">{user.username}</Typography>
                      <Typography variant="body2">{user.email}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <IconButton onClick={() => dispatch(toggleFavorite(user.id))}>
                  <Favorite color="error" />
                </IconButton>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography color="gray" mt={3}>
            ❗ هنوز هیچ علاقه‌مندی اضافه نشده است.
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default FavoriteUsers;
