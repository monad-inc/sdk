/*
Monad API

This is the monad API

API version: 1.0
Contact: support@swagger.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monad

import (
	"encoding/json"
)

// checks if the ModelsBillingAccountRoleUser type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ModelsBillingAccountRoleUser{}

// ModelsBillingAccountRoleUser struct for ModelsBillingAccountRoleUser
type ModelsBillingAccountRoleUser struct {
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
}

// NewModelsBillingAccountRoleUser instantiates a new ModelsBillingAccountRoleUser object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewModelsBillingAccountRoleUser() *ModelsBillingAccountRoleUser {
	this := ModelsBillingAccountRoleUser{}
	return &this
}

// NewModelsBillingAccountRoleUserWithDefaults instantiates a new ModelsBillingAccountRoleUser object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewModelsBillingAccountRoleUserWithDefaults() *ModelsBillingAccountRoleUser {
	this := ModelsBillingAccountRoleUser{}
	return &this
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *ModelsBillingAccountRoleUser) GetEmail() string {
	if o == nil || IsNil(o.Email) {
		var ret string
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsBillingAccountRoleUser) GetEmailOk() (*string, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *ModelsBillingAccountRoleUser) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given string and assigns it to the Email field.
func (o *ModelsBillingAccountRoleUser) SetEmail(v string) {
	o.Email = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ModelsBillingAccountRoleUser) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsBillingAccountRoleUser) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ModelsBillingAccountRoleUser) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ModelsBillingAccountRoleUser) SetId(v string) {
	o.Id = &v
}

func (o ModelsBillingAccountRoleUser) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ModelsBillingAccountRoleUser) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	return toSerialize, nil
}

type NullableModelsBillingAccountRoleUser struct {
	value *ModelsBillingAccountRoleUser
	isSet bool
}

func (v NullableModelsBillingAccountRoleUser) Get() *ModelsBillingAccountRoleUser {
	return v.value
}

func (v *NullableModelsBillingAccountRoleUser) Set(val *ModelsBillingAccountRoleUser) {
	v.value = val
	v.isSet = true
}

func (v NullableModelsBillingAccountRoleUser) IsSet() bool {
	return v.isSet
}

func (v *NullableModelsBillingAccountRoleUser) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableModelsBillingAccountRoleUser(val *ModelsBillingAccountRoleUser) *NullableModelsBillingAccountRoleUser {
	return &NullableModelsBillingAccountRoleUser{value: val, isSet: true}
}

func (v NullableModelsBillingAccountRoleUser) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableModelsBillingAccountRoleUser) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


