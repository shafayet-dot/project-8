import toast from "react-hot-toast"

export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if(favorites) return JSON.parse(favorites)
        return []
}

export const addFavourite = phone => {
    const favorites = getFavorites()
    const isExist = favorites.find(p=>p.id === phone.id)
    if(isExist) return toast.success('already added this')
    favorites.push(phone)
    toast.success('Appointment is added here')
    localStorage.setItem('favorites',JSON.stringify(favorites))
}

export const removeFavorite = id => {
    const favorites = getFavorites()
    const remainingFavorites = favorites.filter(phone => phone.id !== id)
    
    toast.success('opps! Appointment is cancel')

    localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
    
  }