import {
  ADD_APARTMENTS, ADD_APARTMENTS_BY_TYPE, ADD_APARTMENT_DETAILS, ADD_TYPES,
  ADD_APPOINTMENTS, DELETE_APPOINTMENTS, STORE_USER, REMOVE_USER, UPDATE_LOGIN_STATUS,
} from '../../constants';

import apartments from '../../store/reducers/apartments';
import apartmentsByType from '../../store/reducers/apartmentsByType';
import apartmentDetails from '../../store/reducers/apartmentDetails';
import types from '../../store/reducers/types';
import appointments from '../../store/reducers/appointments';
import loggedInStatus from '../../store/reducers/loggedInStatus';
import user from '../../store/reducers/user';

const apartmentsArray = [
  {
    id: 1,
    address: '123 Street',
    rent: '3750',
    reviews: 4.9,
    amenities: null,
    deposit: '1500',
    sq_ft: '400',
    lease_length: '12 months',
    images: [
      {
        id: 1,
        url: 'https://images1.apartments.com/i2/v6M3Icx-M7yq_PryZ8b-sf4NpwNpeSw1gTQhYfJocyY/111/88-fulton-st-new-york-ny-primary-photo.jpg',
        apartment_id: 1,
        created_at: '2020-10-07T07:15:00.385Z',
        updated_at: '2020-10-07T07:15:00.385Z',
      },
      {
        id: 2,
        url: 'https://images1.apartments.com/i2/QlQNKpg-d5MDsb92kYORwp6a5nNziwLE784gJBKRDOk/117/88-fulton-st-new-york-ny-building-photo.jpg',
        apartment_id: 1,
        created_at: '2020-10-07T07:15:08.604Z',
        updated_at: '2020-10-07T07:15:08.604Z',
      },
    ],
    type: 'studio',
  },
  {
    id: 2,
    address: '10th Street',
    rent: '3780',
    reviews: 3.9,
    amenities: null,
    deposit: '2500',
    sq_ft: '500',
    lease_length: '18 months',
    images: [
      {
        id: 3,
        url: 'https://images1.apartments.com/i2/_XRYf3KrKOFGyLPe7L1ydZgpFROFta0M9VcUmxpVNBY/117/88-fulton-st-new-york-ny-building-photo.jpg',
        apartment_id: 2,
        created_at: '2020-10-07T07:15:20.879Z',
        updated_at: '2020-10-07T07:15:20.879Z',
      },
    ],
    type: 'studio',
  },
];

const apartmentDetailsObj = {
  id: 1,
  address: '123 Street',
  rent: '3750',
  reviews: 4.9,
  amenities: null,
  deposit: '1500',
  sq_ft: '400',
  lease_length: '12 months',
  images: [
    {
      id: 1,
      url: 'https://images1.apartments.com/i2/v6M3Icx-M7yq_PryZ8b-sf4NpwNpeSw1gTQhYfJocyY/111/88-fulton-st-new-york-ny-primary-photo.jpg',
      apartment_id: 1,
      created_at: '2020-10-07T07:15:00.385Z',
      updated_at: '2020-10-07T07:15:00.385Z',
    },
    {
      id: 2,
      url: 'https://images1.apartments.com/i2/QlQNKpg-d5MDsb92kYORwp6a5nNziwLE784gJBKRDOk/117/88-fulton-st-new-york-ny-building-photo.jpg',
      apartment_id: 1,
      created_at: '2020-10-07T07:15:08.604Z',
      updated_at: '2020-10-07T07:15:08.604Z',
    },
  ],
  type: 'studio',
};

const typesArray = [
  {
    id: 3,
    name: 'high-rise',
  },
  {
    id: 4,
    name: 'loft',
  },
];

const appointmentsArray = [
  {
    id: 10,
    date: 'October 20, 2020 13:40',
    apartment_id: 1,
    apartment_address: '123 Street',
    created_at: 'October 11, 2020 04:08',
  },
  {
    id: 12,
    date: 'November 30, 2020 18:00',
    apartment_id: 3,
    apartment_address: '11th Street',
    created_at: 'October 11, 2020 08:25',
  },
];

const appointmentsArrayAfterDelete = [
  {
    id: 10,
    date: 'October 20, 2020 13:40',
    apartment_id: 1,
    apartment_address: '123 Street',
    created_at: 'October 11, 2020 04:08',
  },
];

const userObj = {
  id: 4,
  name: 'User3',
  email: 'user3@user.com',
};

describe('Reducers', () => {
  describe('apartments', () => {
    test('returns empty array as default', () => {
      expect(apartments(undefined, {})).toEqual([]);
    });

    test('returns array of apartments', () => {
      expect(apartments(undefined, { type: ADD_APARTMENTS, apartments: apartmentsArray }))
        .toEqual(apartmentsArray);
    });
  });

  describe('apartmentsByType', () => {
    test('returns empty array as default', () => {
      expect(apartmentsByType(undefined, {})).toEqual([]);
    });

    test('returns array of apartments by type', () => {
      expect(apartmentsByType(undefined,
        { type: ADD_APARTMENTS_BY_TYPE, apartmentsByType: apartmentsArray }))
        .toEqual(apartmentsArray);
    });
  });

  describe('apartmentDetails', () => {
    test('returns empty object as default', () => {
      expect(apartmentDetails(undefined, {})).toEqual({});
    });

    test('returns object with properties', () => {
      expect(apartmentDetails(undefined,
        { type: ADD_APARTMENT_DETAILS, apartmentDetails: apartmentDetailsObj }))
        .toEqual(apartmentDetailsObj);
    });
  });

  describe('types', () => {
    test('returns empty array as default', () => {
      expect(types(undefined, {})).toEqual([]);
    });

    test('returns array of types', () => {
      expect(types(undefined, { type: ADD_TYPES, types: typesArray }))
        .toEqual(typesArray);
    });
  });

  describe('appointments', () => {
    describe('add', () => {
      test('returns empty array as default', () => {
        expect(appointments(undefined, {})).toEqual([]);
      });

      test('returns array of appointments', () => {
        expect(appointments(undefined, { type: ADD_APPOINTMENTS, appointments: appointmentsArray }))
          .toEqual(appointmentsArray);
      });
    });

    describe('delete', () => {
      test('returns array of appointments as default when initial state if given', () => {
        expect(appointments(appointmentsArray, {})).toEqual(appointmentsArray);
      });

      test('returns array of appointments after removing one appointment', () => {
        expect(appointments(undefined,
          { type: DELETE_APPOINTMENTS, appointments: appointmentsArray, appointmentId: 12 }))
          .toEqual(appointmentsArrayAfterDelete);
      });
    });
  });

  describe('loggedInStatus', () => {
    test("returns 'NOT_LOGGED_IN' as default", () => {
      expect(loggedInStatus(undefined, {})).toEqual('NOT_LOGGED_IN');
    });

    test("returns 'LOGGED_IN' when status given", () => {
      expect(loggedInStatus(undefined, { type: UPDATE_LOGIN_STATUS, status: 'LOGGED_IN' })).toEqual('LOGGED_IN');
    });
  });

  describe('user', () => {
    test('returns empty object as default', () => {
      expect(user(undefined, {})).toEqual({});
    });

    test('returns object with properties', () => {
      expect(user(undefined,
        { type: STORE_USER, user: userObj }))
        .toEqual(userObj);
    });

    test('returns empty object when REMOVE action is dispatched', () => {
      expect(user(undefined,
        { type: REMOVE_USER }))
        .toEqual({});
    });
  });
});
