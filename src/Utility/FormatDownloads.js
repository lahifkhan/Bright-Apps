export const formatDownloads = (num) => {
  if (num >= 1000000) {
    let m = Math.floor(num / 1000000);
    let r = num % 1000000;

    let d = Math.floor(r / 100000);
    return `${m}.${d}M`;
  } else if (num >= 1000) {
    let th = Math.floor(num / 1000);
    let r = num % 1000;

    let d = Math.floor(r / 100);
    return `${th}.${d}K`;
  } else {
    return num;
  }
};
