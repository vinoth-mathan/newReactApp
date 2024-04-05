import {   fireEvent, render,screen } from "@testing-library/react";
import Namedtest from "./Namedtest";



describe('Namedtest',() => {
    it('check the lable for name ',() => {
        render(<Namedtest/>)
        const nametest = screen.getByTestId("userName").textContent
        expect(nametest).toBe('Name')
    })
    it('input for name is checked',() => {
        render(<Namedtest/>)
        const namecheck = screen.getByPlaceholderText(/enter your name/i)
        expect(namecheck).toBeInTheDocument()
        fireEvent.change(namecheck,{target:{value:'hello'}})
        expect(namecheck.value).toBe('hello')
    })
    it('email label field check',() => {
        render(<Namedtest/>)
        const emlabel = screen.getByTestId(/emlabl/i).textContent
        expect(emlabel).toBe('Email')
        const inputemail = screen.getByPlaceholderText(/enter email/i)
        expect(inputemail).toBeInTheDocument()
        fireEvent.change(inputemail,{target:{value:'email was submited'}})
    })
    it('age label field check',() => {
        render(<Namedtest/>)
        const agelabl = screen.getByTestId('agelabl').textContent
        expect(agelabl).toBe('Age')
        const inputage = screen.getByPlaceholderText(/enter age/i)
        expect(inputage).toBeInTheDocument()
        fireEvent.change(inputage,{target:{value:'22'}})
        expect(inputage.value).toBe('22')
    })
    it('check the button is clicked',() => {
        render(<Namedtest/>)
        //  expect(  screen.getByText(/submit/i)).toBeInTheDocument()
        const btn = screen.getByRole('button',{name:/submit/i})
        expect(btn).toBeInTheDocument()
        fireEvent.click(btn)

    })
})

describe('counter',() => {
    it('chek the count name',() => {
        render(<Namedtest/>)
        expect(screen.getByText(/count/i)).toBeInTheDocument()
        expect(Number(screen.getByTestId('countvalue').textContent)).toEqual(0)
    })
    it('click the add button the count was incresed 1',() => {
        render(<Namedtest/>)
        const butadd = screen.getByRole('button',{name:/Add+/i})
        expect(butadd).toBeInTheDocument()
        fireEvent.click(butadd)
        expect(Number(screen.getByTestId('countvalue').textContent)).toEqual(1)
    })
    it('click the sub button the count was decresed 1',() => {
        render(<Namedtest/>)
        const btnsub = screen.getByRole('button',{name:/sub-/i})
        expect(btnsub).toBeInTheDocument()
        fireEvent.click(btnsub)
        expect(Number(screen.getByTestId('countvalue').textContent)).toEqual(-1)
    })

     const reset = (test) => {
        const btnreset = screen.getByRole('button',{name:test})
        expect(btnreset).toBeInTheDocument()
        fireEvent.click(btnreset)
        expect(Number(screen.getByTestId('countvalue').textContent)).toEqual(0)
     }
    it('click the sub button the count was reset 0',() => {
        render(<Namedtest/>)
        reset(/reset/i)
    })
    
})
describe('apitest',() => {
    beforeEach(()=>{
        console.log('runing each before the test');
    })
    beforeAll(()=>{
        console.log('runing before the test');
    })
    afterAll(()=>{
        console.log('runing after the test');
    })
    afterEach(()=>{
        console.log('runing aftere each test');
    })

    it('test the correct api value',() => {
        render(<Namedtest/>)
        const elecheck = screen.getByTestId('apicall')
        expect(elecheck).toBeInTheDocument()
        expect(screen.queryByText('Loding...')).not.toBeInTheDocument()
    })
    it('check the inside of the data',async () => {
        render(<Namedtest/>)
        const mapdata = await screen.findByTestId('apidata-0')
        expect(mapdata).toBeInTheDocument()
        const fullmapdata = await screen.findAllByTestId(/apidata/i)
        expect(fullmapdata.length).toBe(10)
    })
})