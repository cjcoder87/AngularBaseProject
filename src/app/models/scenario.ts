import { Injectable } from '@angular/core';

export class Scenario {
    id: number;
    scenarioName: string; 
    scenarioDescription: string;

    constructor() { }
}

export interface IScenario{
    id: number;
    scenarioname: string;
    scenarioowner: string;
    scenariodate: string;
    scenarioversion: string;
    scenariostatus: string;
 }
