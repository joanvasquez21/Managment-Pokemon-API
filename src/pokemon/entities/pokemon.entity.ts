import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

/**
 * @Schema es un decorador que se utiliza para marcar una clase como un esquema de Mongoose
 * Document para heredar los métodos y propiedades de Mongoose
 */
@Schema()
export class Pokemon extends Document {
  /**
   * @property
   * unique: true -  Asegura que el valor del campo sea único en toda la colección
   * index: true -  Crea un índice en el campo para mejorar el rendimiento de las consultas permitiendo a mongoDB encontrar
   * rapidamente los documentos que coinciden con una consulta
   */
  @Prop({
    unique: true,
    index: true
  })
  name: string;

  @Prop({
    unique: true,
    index: true
  })
  no: number
}

//Se exportara un esquema, las definiciones que tendra que usarse
export const pokemonSchema = SchemaFactory.createForClass(Pokemon);