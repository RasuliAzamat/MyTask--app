export class TransformDataService {
    static fbObjectToArray(fbObject) {
        if (fbObject) {
            return Object.keys(fbObject).map((id) => {
                const task = fbObject[id];
                task.id = id;

                return task;
            });
        }
    }
}
