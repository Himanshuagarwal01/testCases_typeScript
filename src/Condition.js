import React from 'react'
import { array } from 'yup';

export default function Condition() {
    const condition = (numbers, target) => {
        const ans = [];
        let array = [];
        console.log("numbers", numbers)
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                let sum = numbers[i] + numbers[j];
                if (sum == target) {
                    array = [i, j]
                    ans.push(array)
                }
            }
        }
        console.log("ans", ans)
    }
    const numbers = [2, 3, 6, 7, 1, 4, 5, 4, 6, 0];
    const target = 7;
    return (
        <div>
            {condition(numbers, target)}
        </div>
    )
}
