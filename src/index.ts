const _ = {
  concat<T>(head: T[], ...tail: T[][]) {
    return head.concat(...tail);
  }
};

export default _;

