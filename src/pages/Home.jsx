import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination";

import {useContext, useEffect, useRef, useState} from "react";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setActiveIndex, setPage, setFilters} from "../redax/slices/filterSlice";
import axios from "axios";
import qs from 'qs';
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const listSort = [{name:"популярности",
    sort:"rating"},
    {name:"цене",
      sort:"price"},
    {name:"алфавиту",
      sort:"title"} ];

  const navigate= useNavigate()
  const dispatch = useDispatch()
  const isSearch = useRef(false)
  const isMounted = useRef(false)
  const activeIndex = useSelector(state => state.filter.activeIndex)
  const sorting = useSelector((state) => state.filter.sorting.sort)
  const page = useSelector((state) => state.filter.page)
  const setActive = (id) => {
    dispatch(setActiveIndex(id))
  }
  const setPageNumber = (id) => {
    dispatch(setPage(id))
  }

  const {valueInput} = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const urlApi = `https://62a2fd3a5bd3609cee5f748b.mockapi.io/items?page=${page}&limit=4&category=`;

  const fetchPizza = () => {
    setIsLoading(true)
    axios.get(`${urlApi}${activeIndex>0?`${activeIndex}`:''}&sortBy=${sorting}&order=asc`).then((res) => {
      setItems(res.data)
      setIsLoading(false)
    })
    window.scrollTo(0,0)
  }


  useEffect( ()=> {
    if (isMounted.current) {
      const queryStr = qs.stringify( {
        activeIndex,
        page,
        sorting,
      })
      navigate(`?${queryStr}`)
    }
    isMounted.current = true
  },[activeIndex, page, sorting])


  useEffect(()=> {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sorting = listSort.find(obj => obj.sort===params.sorting )
      dispatch(
          setFilters({
            ...params,
            sorting
          })
      );
      isSearch.current = true
    }
  },[])


  useEffect(()=> {
    if (!isSearch.current) {
      fetchPizza()
    }
    isSearch.current = false
  }, [activeIndex, page, sorting])


  const pizza = items.filter(pizza=> {
    if(pizza.title.toLowerCase().includes(valueInput.toLowerCase())) {
      return true
    }
    return false
  }).map((pizza, index)=>(<PizzaBlock key={index} {...pizza} />));

  const skelet = [...new Array(6)].map((_,index)=> <Skeleton key={index} />)


  return (
      <>
        <div className="content__top">
          <Categories activeIndex={activeIndex} setActiveIndex={(id) => setActive(id)} />
          <Sort listSort={listSort} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          { isLoading? skelet : pizza}
        </div>
        <Pagination onChangePage={(number) => setPageNumber(number)} />
      </>
  )
}

export default Home