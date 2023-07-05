
import { db } from "../db.js";

export const getUserPosts = (req, res) => {

 const q= "SELECT  p.id,p.title,p.desc,p.img,p.date,u.id as userId,p.cat,u.username,u.email  FROM posts p join users u on p.uid=u.id WHERE p.uid = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};
