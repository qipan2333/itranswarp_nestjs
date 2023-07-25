export class MyUtil {
    public static copy_field(source: any, target: any) {
        for (let key in target) {
            console.log(key);
            if (source.hasOwnProperty('_'+key)) {
                target[key] = source['_'+key];
            }
        }
    }
}