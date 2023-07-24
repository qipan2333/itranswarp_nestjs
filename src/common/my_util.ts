export class MyUtil {
    public static copy_field(source: any, target: any) {
        for (let key in target) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    }
}