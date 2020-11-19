import Vue from 'vue'
import {
  Row,
  Col,
  Button,
  Card,
  Icon,
  Divider,
  Message,
  Pagination,
  Form,
  FormItem,
  Input,
  Tabs,
  TabPane,
  Select,
  Option,
  Dialog,
  Table,
  TableColumn,
  Radio,
  Space,
  Popover,
  Popconfirm
  // Checkbox,
  // Radio,
  // Switch,
  // DatePicker,
  // TimePicker
} from '@geip/basic-components'

const comps = [Button, Card, Icon, Divider, Pagination, Form, FormItem, Input, Tabs, TabPane, Row, Col, Select, Dialog, Table, TableColumn,
  Radio, Space, Popover, Popconfirm, Option
  // Checkbox, Radio, Switch, DatePicker, TimePicker
]

comps.forEach(comp => Vue.use(comp))
Vue.prototype.$message = Message
