import mongoose   from "mongoose";

const {Schema, model, SchemaTypes} = mongoose

const imageSchema = new Schema({
  image: SchemaTypes.String
})

const imageModel = model('Image', imageSchema)

export default imageModel