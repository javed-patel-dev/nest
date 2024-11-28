import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: 'pending' },
    priority: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
