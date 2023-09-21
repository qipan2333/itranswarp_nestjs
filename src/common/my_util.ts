export class MyUtil {
  public static copy_field(source: any, target: any) {
    for (const key in target) {
      console.log(key);
      if (source.hasOwnProperty('_' + key)) {
        target[key] = source['_' + key];
      }
    }
  }
}
