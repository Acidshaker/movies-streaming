const genreControllers = require("./genres.controllers.js");
const { success, error } = require("../utils/handleResponses");

const getAllGenres = (req, res) => {
  genreControllers
    .findAllGenres()
    .then((data) => {
      success({
        res,
        status: 200,
        message: "Getting all Genres",
        data,
      });
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: err.message,
      });
    });
};

const postGenre = (req, res) => {
  const { name } = req.body;
  genreControllers
    .createGenre(name)
    .then((data) => {
      success({
        res,
        status: 201,
        message: "Genre created successfully",
        data,
      });
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: err.message,
        fields: {
          name: "string",
        },
      });
    });
};

module.exports = {
  getAllGenres,
  postGenre,
};
