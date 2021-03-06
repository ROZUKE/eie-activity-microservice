const { sequelize } = require("../sequelize");
const { DataTypes } = require("sequelize");

const AttachedSchema = sequelize.define(
  "adjuntos",
  {
    adjuntoId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: "adjunto_id",
    },
    codigo: {
      type: DataTypes.STRING,
    },
    enlace: {
      type: DataTypes.STRING,
    },
    respuestaCorrecta: {
      type: DataTypes.BOOLEAN,
      field: "respuesta_correcta",
    },
    formato: {
      type: DataTypes.ENUM("imagen", "audio"),
    },
    preguntaId: {
      type: DataTypes.INTEGER,
      field: "pregunta_fk",
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "Adjunto",
  }
);

module.exports = { AttachedSchema };
