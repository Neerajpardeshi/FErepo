export class EmployeeScore{
    empid:number;
	java:number;
    spring:number;
	python:number;
	javascript:number;
	datastructure:number;


    constructor( empid:number,
        java:number,
        spring:number,
        python:number,
        javascript:number,
        datastructure:number,
    ){

        this.empid = empid;
        this.java = java;
        this.spring = spring;
        this.python = python;
        this.javascript = javascript;
        this.datastructure = datastructure
    }
}
