import * as service from '../services/personsService.js';

export function getPersons(req, res) {
    service.getPersons(req, res);
}

export function findByprovince(req, res) {
    service.findByprovince(req, res);
}

