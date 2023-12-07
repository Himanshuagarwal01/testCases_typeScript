import React from 'react'

export default function Water() {
    const lastAnswer = (right, left, height) => {
        let answer = [];
        let smaller = 0;
        let final = 0;
        let aaa = 0;
        for (let i = 0; i < height.length; i++) {
            smaller = right[i] <= left[i] ? right[i] : left[i];
            if (smaller >= height[i]) {
                final = smaller - height[i];
                answer.push(final)
            } else {
                final = height[i] - smaller;
                answer.push(final)
            }
        }
        aaa = answer.reduce((a, b) => a + b)
        console.log("aaa", aaa)
    }
    const waterFn = (height) => {
        var left = [];
        var right = [];
        var length = height.length;
        console.log("size", length);
        var leftBigNumber = height[0];
        var rightBigNumber = height[length];
        for (let i = 0; i < height.length; i++) {
            leftBigNumber = leftBigNumber > height[i] ? leftBigNumber : height[i];
            left.push(leftBigNumber);

        }
        for (let j = length - 1; j >= 0; j--) {
            rightBigNumber = rightBigNumber > height[j] ? rightBigNumber : height[j];
            console.log("rightBigNumber ", rightBigNumber);
            right.push(rightBigNumber);
        }
        right.reverse();
        lastAnswer(right, left, height);
    }
    const height = [4, 2, 0, 3, 2, 5];
    return (
        <div>

            {waterFn(height)}
        </div>
    )
}
