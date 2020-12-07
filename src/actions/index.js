// const loading = () => ({
//     type: 'LOADING'
// });

const loadResult = (data)=>({
    type: 'LOAD_RESULT',
    payload: data
});

export const getResult = formInput =>{
            console.log(err.message);
        }
   

const fetchData = async formInput => {
        const res = await fetch(`https://opentdb.com/api.php?amount=${formInput.amount}&category=${formInput.category}&difficulty=${formInput.difficulty}&type=${formInput.type}`);
        const data = ten,
            correct_answer: quiz.ct_answers: quiz.incorrect_answers
      catch(err){
        console.log(err.message);
    }
}