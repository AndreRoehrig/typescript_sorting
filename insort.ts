function insort(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
        let j: number = i;
        while (j > 0) {
            if (list[j] < list[j - 1]) {
                swap(list, j, j - 1);
                j = j - 1;
            }
            // tslint:disable-next-line:one-line
            else {
                break;
            }
        }
}

    return list;
}

function swap(list: number[], i0: number, i1: number): number[] {
    const temp = list[i0];
    list[i0] = list[i1];
    list[i1] = temp;
    return list;
}
