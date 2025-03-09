import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../slices/favoritesSlice";
import { useGetUsersQuery } from "../services/usersApi";
import {
  CircularProgress,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface RootState {
  favorites: number[];
}

const UserList = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");

  const filteredUsers = users?.filter(
    (user: User) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <CircularProgress />;
  if (error) return <p>خطا در دریافت اطلاعات</p>;

  return (
    <>
      <TextField
        label="جستجو کاربران"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={3}>
        {filteredUsers?.map((user: User) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
              sx={{
                backgroundColor: "#F44336",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar sx={{ backgroundColor: "#fff", color: "#F44336" }}>
                      {user.name[0]}
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {user.username}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {user.email}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <IconButton onClick={() => dispatch(toggleFavorite(user.id))}>
                {favorites.includes(user.id) ? (
                  <Favorite color="error" />
                ) : (
                  <FavoriteBorder />
                )}
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UserList;
