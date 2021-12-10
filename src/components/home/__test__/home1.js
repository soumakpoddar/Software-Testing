import "@testing-library/jest-dom/extend-expect";

const getData=require('../Home').getData

jest.setTimeout(1000000);

test('home should be detected',async()=>{
    const ans=await getData('https://crop-protection-network.s3.amazonaws.com/articles');
    console.log(ans);
    expect(ans).not.toBe(null);
})