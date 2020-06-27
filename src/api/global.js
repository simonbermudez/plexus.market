// Dependencies
import axios from 'axios'

export default {
  async getProducts() {
    let videos

    await axios.get(process.env.VUE_APP_API_URL).then(({ data }) => {
      data.items.map(item => {
        videos = [...this.videos, ...item.videos]
      })
    })

    return videos
  },

  async getCategories() {
    let categories

    await axios.get(process.env.VUE_APP_API_URL).then(({ data }) => {
      categories = data.items
    })

    return categories
  },
}
