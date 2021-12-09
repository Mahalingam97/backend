module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
      userId: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
      },
      userName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      userEmail: {
          type: DataTypes.STRING,
          allowNull: false,
          // validate: {isEmail: { msg: "Must have a valid email"}},
          unique: true
      },
      userPhone: {
          type: DataTypes.BIGINT,
          // validate: {
          //   len: {args: [10], msg: "phone number should contain 10 numbers"}
          // }
      },
      userPassword: DataTypes.STRING,
      Logged:{
          type:DataTypes.BOOLEAN,
          defaultValue:false
      }
  })
  return user;
}