
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import * as echarts from 'echarts';
import {  changeIsLoadign, saveProductTrends } from '../../redux/reducer/search';

import { Link } from 'react-router-dom';
import { useEffect, useRef  } from 'react';
import axios from 'axios';
function Card () {
    const { keyword, isLoading, product_trends  } = useSelector(state => state.search)
    const dispatch = useDispatch()
    const chart1 = useRef()
    const chart2 = useRef()
    const chart3 = useRef()
    const chart4 = useRef()
    const chart0 = useRef()
    const url = 'http://3.141.23.218:5000/interview/keyword_search'
    useEffect(() => {
        if (!isLoading) {
            console.log( product_trends )
            function bindChart (dom, num) {
                var myChart = echarts.init(dom.current)
                var option
                let data = []
                product_trends[num].search_msv.forEach( item => {
                    let arr = []
                    let strTime = item.date + '-1'
                    const dateTime = +new Date(strTime)
                     arr.push( dateTime)
                     arr.push(item.sv)
                     data.push(arr)
                })
            option = {
                tooltip: {
                  trigger: 'axis',
                  position: function (pt) {
                    return [pt[0], '10%'];
                  }
                },
                title: {
                  left: 'center',
                  text: 'Large'
                },
                toolbox: {
                  feature: {
                    dataZoom: {
                      yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                  }
                },
                xAxis: {
                  type: 'time',
                  boundaryGap: false
                },
                yAxis: {
                  type: 'value',
                  boundaryGap: [0, '100%']
                },
                dataZoom: [
                  {
                    type: 'inside',
                    start: 0,
                    end: 20
                  },
                  {
                    start: 0,
                    end: 20
                  }
                ],
                series: [
                  {
                    name: 'Fake Data',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    areaStyle: {},
                    data: data
                  }
                ]
              };
              
              option && myChart.setOption(option)
              window.onresize = ()=>{
                myChart.resize()
               
         }
            }
            bindChart(chart0, 0)
            bindChart(chart1, 1)
            bindChart(chart2, 2)
            bindChart(chart3, 3)
            bindChart(chart4, 4)
       
              
        } else {

            axios({ 
                url,
                method: 'post',
                data: {
                    "login_token":"INTERVIEW_SIMPLY2021",
                    "search_phrase": keyword
                }
            }).then((res) => {
                dispatch(saveProductTrends(res.data.data.product_trends))
                dispatch(changeIsLoadign())
                console.log( res.data.data.product_trends, isLoading, product_trends)
            })
        }
        return () => {
            window.onresize = null
        }
    })
    if (isLoading) {

        return (
            // {}
            <Grid container spacing={2}>
                    <Grid  item xs={12} sm={6} md={3} lg={3} 
                       
                    >
                        <Box
                             sx={{ 
                                 width:'60%',
                                padding: '20%',
                                 overflow: 'hidden'
                                }}
                                >
                            
                            <img src="/imgs/loading.gif" alt="" style={{width:'100%',xheight:'100%'}}/>
                        </Box>
                    </Grid>
                    <Grid ref={chart2} item xs={12} sm={6} md={3} lg={3}>
                        <Box
                             sx={{ 
                                 width:'60%',
                                padding: '20%',
                                 overflow: 'hidden'
                                }}
                                >
                            
                            <img src="/imgs/loading.gif" alt="" style={{width:'100%',xheight:'100%'}}/>
                        </Box>
                    </Grid>
                    <Grid ref={chart3} item xs={12} sm={6} md={3} lg={3}>
                        <Box
                             sx={{ 
                                 width:'60%',
                                padding: '20%',
                                 overflow: 'hidden'
                                }}
                                >
                            
                            <img src="/imgs/loading.gif" alt="" style={{width:'100%',xheight:'100%'}}/>
                        </Box>
                    </Grid>
                    <Grid ref={chart4} item xs={12} sm={6} md={3}>
                        <Box
                             sx={{ 
                                 width:'60%',
                                padding: '20%',
                                 overflow: 'hidden'
                                }}
                                >
                            
                            <img src="/imgs/loading.gif" alt="" style={{width:'100%',xheight:'100%'}}/>
                        </Box>
                    </Grid>
                    <Grid ref={chart0} item xs={12} sm={6} md={3}>
                        <Box
                             sx={{ 
                                 width:'60%',
                                padding: '20%',
                                 overflow: 'hidden'
                                }}
                                >
                            
                            <img src="/imgs/loading.gif" alt="" style={{width:'100%',xheight:'100%'}}/>
                        </Box>
                    </Grid>
            </Grid>
        )
    }else {
        return (
            
            <Grid container spacing={2}>
                {/* {product_trends.map((item, index) => {
            
        })} */}
                    <Grid item xs={12} sm={6} md={3} lg={3}
                        
                    >
                        <Box ref={chart0}
                            sx={{ 
                                width:'100%',
                                height: '200px',
                                // padding: '20%',
                                overflow: 'hidden',
                                // backgroundColor: 'orange'
                               }}
                        >

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Box ref={chart1}
                            sx={{ 
                                width:'100%',
                                height: '200px',
                                // padding: '20%',
                                overflow: 'hidden',
                                // backgroundColor: 'orange'
                               }}
                        >

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Box ref={chart2}
                            sx={{ 
                                width:'100%',
                                height: '200px',
                                // padding: '20%',
                                overflow: 'hidden',
                                // backgroundColor: 'orange'
                               }}
                        >

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Box ref={chart3}
                            sx={{ 
                                width:'100%',
                                height: '200px',
                                // padding: '20%',
                                overflow: 'hidden',
                                // backgroundColor: 'orange'
                               }}
                        >

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Box ref={chart4}
                            sx={{ 
                                width:'100%',
                                height: '200px',
                                // padding: '20%',
                                overflow: 'hidden',
                                // backgroundColor: 'orange'
                               }}
                        >

                        </Box>
                    </Grid>
            </Grid>
        )
    }
}
function Logo () {
    const matches = useMediaQuery('(max-width:600px)')
    // const { keyword } = useSelector(state => state.search)

    if (matches) {
        return (
            <Box>
                <Link to={'/index'} style={{ textDecoration:'none',color: 'black'}}>

                    <Box component="span" sx={{ 
                        display: 'inline-block',
                        fontWeight:'bold',
                        color: 'white',
                        textAlign: 'center',
                        backgroundColor: 'black',
                        lineHeight: '40px',
                        width: '40px',
                        height: '40px',
                        margin: '0 0 0 20px'
                        }}>
                        ST
                    </Box>
                 </Link>
            </Box>
        )
    } else {
        return (
            <Box  
                sx={{
                    overflow: 'hidden',
              }}
            >
                 <Link to={'/index'} style={{ textDecoration:'none',color: 'black'}}>

                    <Box component="span" sx={{ 
                        fontWeight:'bold',
                        margin: '0 0 0 37px',
                        lineHeight: '40px',
                        }}>
                        Best
                    </Box>
                    <Box component="span" sx={{ }}>
                        Serrch
                    </Box>
                 </Link>
            </Box>
        )
    } 
}
function List() {
    const { source } = useSelector(state => state.search)

  return (
    <div>
      <Grid container spacing={3}
        sx={{
            padding: '10px',
            borderBottom: '1px solid gray',
          }}
      >
        <Grid item xs={2}>
          <Logo />
        </Grid>
          <Grid item xs={8} >
            <TextField size="small" fullWidth  label={`${source}`} id="fullWidth" />
          </Grid>
          <Grid item xs={2}>
              <Box>
                    <Button
                    size="small"
                    variant="outlined"
                    sx={{
                        // display: 'block',
                        position: 'relative',
                        border: '1px solid #333',
                        // margin: '0 0 0 30px',
                        borderRadius: '4px',
                        width: '56px',
                        height: '40px'
                    }}
                >
                    <Search
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)'
                        }}
                    ></Search>
                </Button>
              </Box>
          </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={2}>

        </Grid>
        <Grid item xs={12} sm={8}>
             <Box
                sx={{
                    margin: '60px',
                    // backgroundColor: 'orange',
                }}
            >
                Related product trends 
            </Box>
            <Card />
        </Grid>
        <Grid item xs={0} sm={2}>

        </Grid>
      </Grid>
      
    </div>
  )
}

export default List;