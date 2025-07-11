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

// checks if the MutateValueWhereKeyEqMutateValueWhereKeyEq type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MutateValueWhereKeyEqMutateValueWhereKeyEq{}

// MutateValueWhereKeyEqMutateValueWhereKeyEq struct for MutateValueWhereKeyEqMutateValueWhereKeyEq
type MutateValueWhereKeyEqMutateValueWhereKeyEq struct {
	// The key to mutate
	Key *string `json:"key,omitempty"`
	Value interface{} `json:"value,omitempty"`
}

// NewMutateValueWhereKeyEqMutateValueWhereKeyEq instantiates a new MutateValueWhereKeyEqMutateValueWhereKeyEq object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMutateValueWhereKeyEqMutateValueWhereKeyEq() *MutateValueWhereKeyEqMutateValueWhereKeyEq {
	this := MutateValueWhereKeyEqMutateValueWhereKeyEq{}
	return &this
}

// NewMutateValueWhereKeyEqMutateValueWhereKeyEqWithDefaults instantiates a new MutateValueWhereKeyEqMutateValueWhereKeyEq object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMutateValueWhereKeyEqMutateValueWhereKeyEqWithDefaults() *MutateValueWhereKeyEqMutateValueWhereKeyEq {
	this := MutateValueWhereKeyEqMutateValueWhereKeyEq{}
	return &this
}

// GetKey returns the Key field value if set, zero value otherwise.
func (o *MutateValueWhereKeyEqMutateValueWhereKeyEq) GetKey() string {
	if o == nil || IsNil(o.Key) {
		var ret string
		return ret
	}
	return *o.Key
}

// GetKeyOk returns a tuple with the Key field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MutateValueWhereKeyEqMutateValueWhereKeyEq) GetKeyOk() (*string, bool) {
	if o == nil || IsNil(o.Key) {
		return nil, false
	}
	return o.Key, true
}

// HasKey returns a boolean if a field has been set.
func (o *MutateValueWhereKeyEqMutateValueWhereKeyEq) HasKey() bool {
	if o != nil && !IsNil(o.Key) {
		return true
	}

	return false
}

// SetKey gets a reference to the given string and assigns it to the Key field.
func (o *MutateValueWhereKeyEqMutateValueWhereKeyEq) SetKey(v string) {
	o.Key = &v
}

// GetValue returns the Value field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *MutateValueWhereKeyEqMutateValueWhereKeyEq) GetValue() interface{} {
	if o == nil {
		var ret interface{}
		return ret
	}
	return o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *MutateValueWhereKeyEqMutateValueWhereKeyEq) GetValueOk() (*interface{}, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return &o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *MutateValueWhereKeyEqMutateValueWhereKeyEq) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given interface{} and assigns it to the Value field.
func (o *MutateValueWhereKeyEqMutateValueWhereKeyEq) SetValue(v interface{}) {
	o.Value = v
}

func (o MutateValueWhereKeyEqMutateValueWhereKeyEq) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MutateValueWhereKeyEqMutateValueWhereKeyEq) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Key) {
		toSerialize["key"] = o.Key
	}
	if o.Value != nil {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableMutateValueWhereKeyEqMutateValueWhereKeyEq struct {
	value *MutateValueWhereKeyEqMutateValueWhereKeyEq
	isSet bool
}

func (v NullableMutateValueWhereKeyEqMutateValueWhereKeyEq) Get() *MutateValueWhereKeyEqMutateValueWhereKeyEq {
	return v.value
}

func (v *NullableMutateValueWhereKeyEqMutateValueWhereKeyEq) Set(val *MutateValueWhereKeyEqMutateValueWhereKeyEq) {
	v.value = val
	v.isSet = true
}

func (v NullableMutateValueWhereKeyEqMutateValueWhereKeyEq) IsSet() bool {
	return v.isSet
}

func (v *NullableMutateValueWhereKeyEqMutateValueWhereKeyEq) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMutateValueWhereKeyEqMutateValueWhereKeyEq(val *MutateValueWhereKeyEqMutateValueWhereKeyEq) *NullableMutateValueWhereKeyEqMutateValueWhereKeyEq {
	return &NullableMutateValueWhereKeyEqMutateValueWhereKeyEq{value: val, isSet: true}
}

func (v NullableMutateValueWhereKeyEqMutateValueWhereKeyEq) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMutateValueWhereKeyEqMutateValueWhereKeyEq) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


