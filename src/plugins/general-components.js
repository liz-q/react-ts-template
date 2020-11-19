import Vue from 'vue'

import FlexWrapper from '../components/FlexWrapper'
import CommonCard from '../components/CommonCard'
import CommonPagination from '../components/CommonPagination'
import PageHeader from '../components/PageHeader'

const comps = [
  FlexWrapper,
  CommonCard,
  CommonPagination,
  PageHeader
]

comps.forEach(C => Vue.use(C))
