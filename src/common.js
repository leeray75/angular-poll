import 'zone.js/dist/zone.js';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, enableProdMode, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';