import { deleteMethod, get, post, put } from "../utils/request";

// get all
export const getFilmList = async (params) => {
  const res = await get("Films", params);
  return res;
};
export const getAllCategories = async (params) => {
  const res = await get("Categories/getAllCategories", params);
  return res;
};
export const getAllUsers = async (params) => {
  const res = await get("Users", params);
  return res;
};

export const getAllActors = async (params) => {
  const res = await get("Actors/getAllActors", params);
  return res;
};
export const getActorByFimlId = async (id, params) => {
  const res = await get(`Actors/getActorByFimlId/${id}`, params);
  return res;
};

export const getAllCinemasCategories = async (params) => {
  const res = await get("CinemasCategories", params);
  return res;
};
export const getAllCinemas = async (params) => {
  const res = await get("Cinemas", params);
  return res;
};
export const GetCinemasByCategoryId = async (id) => {
  console.log(`Cinemas/GetCinemasByCategoryId/${id}`);

  const res = await get(`Cinemas/GetCinemasByCategoryId/${id}`);
  return res;
};
export const GetAllComments = async (params) => {
  const res = await get("Comments/GetAllComment", params);
  return res;
};
export const GetAllRooms = async (params) => {
  const res = await get("Rooms", params);
  return res;
};
export const GetAllSchedules = async (params) => {
  const res = await get("Schedules", params);
  return res;
};
export const GetFilmsWithParams = async (params) => {
  const res = await get(`Films/${params}`);
  return res;
};
export const GetNowShowingFilms = async (params) => {
  const res = await get("Films/getNowShowingFilms", params);
  return res;
};
export const GetAllSeats = async (params) => {
  const res = await get("Seats", params);
  return res;
};
export const GetAllTickets = async (params) => {
  const res = await get("Tickets", params);
  return res;
};
export const GetAllTrailers = async (params) => {
  const res = await get("Trailers", params);
  return res;
};
export const GetAllShowDates = async (params) => {
  const res = await get("ShowDates", params);
  return res;
};
export const GetAllFilmByActorId = async (id, params) => {
  const res = await get(`Films/GetAllFilmByActor/${id}`, params);
  return res;
};

export const GetAllCategoryIdByFilmId = async (id, params) => {
  const res = await get(`Categories/getAllCategoryIdByFilmId/${id}`, params);
  return res;
};
export const GetAllCategoriesByFilmId = async (id, params) => {
  const res = await get(`Categories/getAllCategoriesByFilmId/${id}`, params);
  return res;
};
export const GetAllRoles = async (params) => {
  const res = await get(`Account/getRoles`, params);
  return res;
};
export const GetAllBookingDetails = async (params) => {
  const res = await get(`BookingUser/GetAllBookingDetails`, params);
  return res;
};
export const GetAllRolesByUser = async (id, params) => {
  const res = await post(`Account/getRolesByUser/${id}`, params);
  return res;
};

export const GetTop5BestSales = async () => {
  const res = await get(`BookingUser/GetTop5FIlm`);
  return res;
};
export const GetTotalMoneyWithMonth = async () => {
  const res = await get(`BookingUser/GetTotalMoney`);
  return res;
};

// get one

export const GetAllShowDateByCinemasId = async (id, params) => {
  const res = await get(`ShowDates/GetAllShowDateByCinemasId/${id}`, params);
  return res;
};
export const getUserById = async (id, params) => {
  const res = await get(`Users/getUserById/${id}`, params);
  return res;
};
export const getFilmById = async (id, params) => {
  const res = await get(`Films/${id}`, params);
  return res;
};
export const GetRoomByCinemasId = async (id, params) => {
  const res = await get(`Rooms/GetRoomByCinemasId/${id}`, params);
  return res;
};
export const GetRoomById = async (id, params) => {
  const res = await get(`Rooms/${id}`, params);
  return res;
};
export const GetCinemasById = async (id, params) => {
  const res = await get(`Cinemas/${id}`, params);
  return res;
};
export const GetCinemasCategoryById = async (id, params) => {
  const res = await get(`CinemasCategories/${id}`, params);
  return res;
};
// create
export const createNewFilm = async (data, params) => {
  const res = await post(`Films`, data, params);
  return res;
};
export const createNewUser = async (data, params) => {
  const res = await post(`Users/createUser`, data, params);
  return res;
};
export const createNewActor = async (data, params) => {
  const res = await post(`Actors`, data, params);
  return res;
};
export const createNewCategory = async (data, params) => {
  const res = await post(`Categories`, data, params);
  return res;
};
export const createNewCinemasCategories = async (data, params) => {
  const res = await post(`CinemasCategories`, data, params);
  return res;
};
export const createNewCinemas = async (data, params) => {
  const res = await post(`Cinemas`, data, params);
  return res;
};
export const createNewRoom = async (data, params) => {
  const res = await post(`Rooms`, data, params);
  return res;
};
export const createNewShowDate = async (data, params) => {
  const res = await post(`ShowDates`, data, params);
  return res;
};
export const createNewSchedule = async (data, params) => {
  const res = await post(`Schedules`, data, params);
  return res;
};

export const createNewSeat = async (data, params) => {
  const res = await post(`Seats`, data, params);
  return res;
};
export const createNewTicket = async (data, params) => {
  const res = await post(`Tickets`, data, params);
  return res;
};

export const createNewTrailer = async (data, params) => {
  const res = await post(`Trailers`, data, params);
  return res;
};

export const createNewRole = async (data, params) => {
  const res = await post(`Account/createRole`, data, params);
  return res;
};

export const setRole = async (id, data, params) => {
  const res = await post(`Account/setRole/${id}`, data, params);
  return res;
};
// update
export const updateFilm = async (id, data, params) => {
  const res = await put(`Films/${id}`, data, params);
  return res;
};
export const updateUser = async (id, data, params) => {
  const res = await put(`Users/updateUser/${id}`, data, params);
  return res;
};
export const updateActor = async (id, data, params) => {
  const res = await put(`Actors/${id}`, data, params);
  return res;
};

export const updateCategory = async (id, data, params) => {
  const res = await put(`Categories/${id}`, data, params);
  return res;
};
export const updateCinemasCategory = async (id, data, params) => {
  const res = await put(`CinemasCategories/${id}`, data, params);
  return res;
};
export const updateCinemas = async (id, data, params) => {
  const res = await put(`Cinemas/${id}`, data, params);
  return res;
};
export const updateRoom = async (id, data, params) => {
  const res = await put(`Rooms/${id}`, data, params);
  return res;
};
export const updateSchedule = async (id, data, params) => {
  const res = await put(`Schedules/${id}`, data, params);
  return res;
};
export const updateSeat = async (id, data, params) => {
  const res = await put(`Seats/${id}`, data, params);
  return res;
};
export const updateShowdate = async (id, data, params) => {
  const res = await put(`ShowDates/${id}`, data, params);
  return res;
};
export const updateTicket = async (id, data, params) => {
  const res = await put(`Tickets/${id}`, data, params);
  return res;
};
export const updateTrailer = async (id, data, params) => {
  const res = await put(`Trailers/${id}`, data, params);
  return res;
};

export const updateRole = async (id, data, params) => {
  const res = await put(`Account/updateRole/${id}`, data, params);
  return res;
};
// delete
export const deleteFilm = async (id, data, params) => {
  const res = await deleteMethod(`Films/${id}`, data, params);
  return res;
};

export const deleteUser = async (id, data, params) => {
  const res = await deleteMethod(`Users/deleteUser/${id}`, data, params);
  return res;
};
export const deleteActor = async (id, data, params) => {
  const res = await deleteMethod(`Actors/${id}`, data, params);
  return res;
};

export const deleteCategory = async (id, data, params) => {
  const res = await deleteMethod(`Categories/${id}`, data, params);
  return res;
};

export const deleteCinemasCategory = async (id, data, params) => {
  const res = await deleteMethod(`CinemasCategories/${id}`, data, params);
  return res;
};
export const deleteCinemas = async (id, data, params) => {
  const res = await deleteMethod(`Cinemas/${id}`, data, params);
  return res;
};

export const deleteComment = async (id, data, params) => {
  const res = await deleteMethod(`Comments/deleteComment/${id}`, data, params);
  return res;
};
export const deleteRoom = async (id, data, params) => {
  const res = await deleteMethod(`Rooms/${id}`, data, params);
  return res;
};
export const deleteSchedule = async (id, data, params) => {
  const res = await deleteMethod(`Schedules/${id}`, data, params);
  return res;
};
export const deleteSeat = async (id, data, params) => {
  const res = await deleteMethod(`Seats/${id}`, data, params);
  return res;
};
export const deleteShowdate = async (id, data, params) => {
  const res = await deleteMethod(`ShowDates/${id}`, data, params);
  return res;
};

export const deleteTicket = async (id, data, params) => {
  const res = await deleteMethod(`Tickets/${id}`, data, params);
  return res;
};
export const deleteTrailer = async (id, data, params) => {
  const res = await deleteMethod(`Trailers/${id}`, data, params);
  return res;
};

export const deleteRole = async (id, data, params) => {
  const res = await deleteMethod(`Account/deleteRole/${id}`, data, params);
  return res;
};

//  check
export const IsCinemaRoomOccupied = async (params) => {
  const res = await get("Rooms/isCinemaRoomOccupied", params);
  return res;
};

// get count
export const GetCountFilm = async (params) => {
  const res = await get("Films/getCount", params);
  return res;
};

export const GetCountCinemas = async (params) => {
  const res = await get("Cinemas/getCount", params);
  return res;
};

export const GetCountUser = async (params) => {
  const res = await get("Users/getCountUser", params);
  return res;
};

export const GetCountTicket = async (params) => {
  const res = await get("BookingUser/GetCountTicket", params);
  return res;
};

export const GetCountActor = async (params) => {
  const res = await get("Actors/getCount", params);
  return res;
};
export const GetCountCategory = async (params) => {
  const res = await get("Categories/getCount", params);
  return res;
};
export const GetCountCinemasCategory = async (params) => {
  const res = await get("CinemasCategories/getCount", params);
  return res;
};

export const GetCountComment = async (params) => {
  const res = await get("Comments/getCount", params);
  return res;
};
export const GetCountRoom = async (params) => {
  const res = await get("Rooms/getCount", params);
  return res;
};

export const GetCountSchedule = async (params) => {
  const res = await get("Schedules/getCount", params);
  return res;
};
export const GetCountSeat = async (params) => {
  const res = await get("Seats/getCount", params);
  return res;
};
export const GetCountShowDate = async (params) => {
  const res = await get("ShowDates/getCount", params);
  return res;
};
export const GetCountTrailer = async (params) => {
  const res = await get("Trailers/getCount", params);
  return res;
};
export const GetCountRole = async (params) => {
  const res = await get("Account/role/getCount", params);
  return res;
};
// search

export const SearchFilm = async (params) => {
  const res = await get(`Films/search`, params);
  return res;
};
export const SearchActor = async (params) => {
  const res = await get(`Actors/search`, params);
  return res;
};

export const SearchCinemas = async (params) => {
  const res = await get(`Cinemas/search`, params);
  return res;
};

export const SearchCategory = async (params) => {
  const res = await get(`Categories/search`, params);
  return res;
};
export const SearchTrailer = async (params) => {
  const res = await get(`Trailers/search`, params);
  return res;
};

export const SearchTicket = async (params) => {
  const res = await get(`Tickets/search`, params);
  return res;
};

export const SearchShowDate = async (params) => {
  const res = await get(`ShowDates/search`, params);
  return res;
};

export const SearchSeat = async (params) => {
  const res = await get(`Seats/search`, params);
  return res;
};

export const SearchSchedule = async (params) => {
  const res = await get(`Schedules/search`, params);
  return res;
};

export const SearchRoom = async (params) => {
  const res = await get(`Rooms/search`, params);
  return res;
};

export const SearchUser = async (params) => {
  const res = await get(`Users/search`, params);
  return res;
};

export const SearchComment = async (params) => {
  const res = await get(`Comments/search`, params);
  return res;
};

export const SearchCinemasCategory = async (params) => {
  const res = await get(`CinemasCategories/search`, params);
  return res;
};
