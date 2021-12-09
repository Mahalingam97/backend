module.exports = (sequelize, DataTypes) => {

    const movieCast = sequelize.define("movieCast", {
        MovieId: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        Actors: DataTypes.STRING,
        Producers: DataTypes.STRING,
        Director: DataTypes.STRING,
        Writer: DataTypes.STRING
    })
    return movieCast;
}