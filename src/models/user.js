const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  token: String
}, {timestamps: true})

userSchema.methods.generateAuthToken = async () => {
  const token = jwt.sign({_id: this._id.toString()}, process.env.SECRET)
  this.token = token
  await this.save()
  return token
}

module.exports = mongoose.model('User', userSchema)
