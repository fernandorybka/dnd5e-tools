

const LocalStorageService = {

    setItem : (id, value) => localStorage.setItem(id, value),
    setItemJSON : (id, value) => localStorage.setItem(id, JSON.stringify(value)),
    getItem : (id) => localStorage.getItem(id),
    getItemJSON : (id) => JSON.parse(localStorage.getItem(id))

}

export default LocalStorageService;