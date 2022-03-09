class DatabaseService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async postData(data) {
        try {
            const response = await fetch(`${this.baseURL}/tasks.json`, {
                method: 'POST',
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async getData() {
        try {
            const response = await fetch(`${this.baseURL}/tasks.json`, {
                method: 'GET',
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async getDataById(id) {
        try {
            const response = await fetch(`${this.baseURL}/tasks/${id}.json`, {
                method: 'GET',
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async changeData(id) {
        try {
            const response = await fetch(`${this.baseURL}/tasks/${id}.json`, {
                method: 'PATCH',
                body: JSON.stringify({
                    done: true,
                }),
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async deleteData(id) {
        try {
            const response = await fetch(`${this.baseURL}/tasks/${id}.json`, {
                method: 'DELETE',
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export const databaseService = new DatabaseService(
    'https://mytask-245b7-default-rtdb.firebaseio.com'
);
