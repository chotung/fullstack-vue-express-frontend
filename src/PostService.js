// Handles all the request
import axios from 'axios'

const url = 'http://localhost:5000/api/posts/'

class PostService {
    // Get Posts
    //static even tho with a class you dont have to instantiate to use get posts
    // PostService.getPosts()
    static getPosts() {
        return new Promise(async (resolve, reject) => {
          try {
            const res = await axios.get(url)
            const data = res.data
            resolve(
                data.map(post => ({
                    ...post,
                    createdAt: new Date(post.createdAt)
                }))
            )
          } catch(err) {
            reject(err)
          }
        })
    }
    // Create Post
    static insertPost(text) {
        return axios.post(url, {
            text:text
        })
    }
    
    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostService