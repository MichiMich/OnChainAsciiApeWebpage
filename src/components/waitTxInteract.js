// const InteractContract = async () => {
//     await enterRaffle(
//         {
//             onSuccess: (tx) => tx.wait().then(() => handleSuccess),
//             onComplete: (tx) => tx.wait().then(() => handleComplete),
//             //onError: () => { handleError(JSON.stringify(error)) },
//             onError: (tx) => tx.wait().then(() => handleError),
//         }
//     )
// }