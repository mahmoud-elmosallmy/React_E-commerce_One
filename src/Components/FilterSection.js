import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../Context/FilterContext';
import { FaCheck } from 'react-icons/fa';
import FormatPrice from '../Helpers/FormatPrice';
import { Button } from '../styles/Button';

function FilterSection() {
  const { filters:{text , color , price , maxPrice , minPrice} , updateFilterValue ,all_products ,clearFilters} = useFilterContext();
  // const { filters:{text ,category , color , price , maxPrice , minPrice} , updateFilterValue ,all_products ,clearFilters} = useFilterContext();
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // TO GET THE UNIQUE DATA OF EACH FIELDS
  const getUniqueData = (data , property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    })
    if (property === "colors") {
      newVal = newVal.flat()
    } 
    return (newVal = ["all" , ...new Set(newVal)])
  }


  // WE NEED UNIQUE DATA
  const categoryOnlyData = getUniqueData(all_products , "category")
  const companyOnlyData = getUniqueData(all_products , "company")
  const colorOnlyData = getUniqueData(all_products , "colors")

  // console.log(colorOnlyData);

  const showCategoryData = categoryOnlyData.map((ele,i) => {
    return <button key={i} type='button' name='category' onClick={updateFilterValue} value={ele}>{ele}</button>
  })
  const showCompanyData = companyOnlyData.map((ele,i) => {
    return <option key={i} name='company' onClick={updateFilterValue} value={ele}>{ele}</option>
  })
  const showColorData = colorOnlyData.map((ele,i) => {
    if (ele === "all") {
      return <button 
              key={i}
              type='button'
              name="color"
              value={ele}
              className='color-all--style'
              onClick={updateFilterValue}>All</button>
    }
    return <button 
              key={i}
              type='button'
              name="color"
              value={ele}
              style={{backgroundColor: ele}}
              className={color === ele ?  'btnStyle active' : 'btnStyle'}
              onClick={updateFilterValue}>{color === ele ?  <FaCheck className='checkStyle' /> : null}</button>
  })

  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name='text'
            value={text}
            onChange={updateFilterValue}
            placeholder='SEARCH'
          />
        </form>
      </div>
      <div className='filter-category'>
        <h3>Category</h3>
        <div>{showCategoryData}</div>
      </div>
      <div className='filter-company'>
        <h3>Company</h3>
        <form>
          <select name='company' id='company' className='filter-company--select' onClick={updateFilterValue}>
            {showCompanyData}
          </select>
        </form>
      </div>
      <div className='filter-colors colors'>
        <h3>Colors</h3>
        <div className='filter-color-style'>{showColorData}</div>
      </div>
      <div className='filter_price'>
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input type='range' name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
      </div>
      <div className='clear-filter'>
        <Button className='btn' onClick={clearFilters}> Clear Filter</Button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection