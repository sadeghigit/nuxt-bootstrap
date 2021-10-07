import * as bs from "bootstrap";
import Vue from 'vue'

export default ({ app }, inject) => {
    inject('bs', Vue.observable(bs))
}