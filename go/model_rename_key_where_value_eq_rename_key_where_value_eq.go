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

// checks if the RenameKeyWhereValueEqRenameKeyWhereValueEq type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RenameKeyWhereValueEqRenameKeyWhereValueEq{}

// RenameKeyWhereValueEqRenameKeyWhereValueEq struct for RenameKeyWhereValueEqRenameKeyWhereValueEq
type RenameKeyWhereValueEqRenameKeyWhereValueEq struct {
	// The key to rename
	Key *string `json:"key,omitempty"`
	// The new key to rename to
	NewKey *string `json:"new_key,omitempty"`
	Value interface{} `json:"value,omitempty"`
}

// NewRenameKeyWhereValueEqRenameKeyWhereValueEq instantiates a new RenameKeyWhereValueEqRenameKeyWhereValueEq object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRenameKeyWhereValueEqRenameKeyWhereValueEq() *RenameKeyWhereValueEqRenameKeyWhereValueEq {
	this := RenameKeyWhereValueEqRenameKeyWhereValueEq{}
	return &this
}

// NewRenameKeyWhereValueEqRenameKeyWhereValueEqWithDefaults instantiates a new RenameKeyWhereValueEqRenameKeyWhereValueEq object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRenameKeyWhereValueEqRenameKeyWhereValueEqWithDefaults() *RenameKeyWhereValueEqRenameKeyWhereValueEq {
	this := RenameKeyWhereValueEqRenameKeyWhereValueEq{}
	return &this
}

// GetKey returns the Key field value if set, zero value otherwise.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) GetKey() string {
	if o == nil || IsNil(o.Key) {
		var ret string
		return ret
	}
	return *o.Key
}

// GetKeyOk returns a tuple with the Key field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) GetKeyOk() (*string, bool) {
	if o == nil || IsNil(o.Key) {
		return nil, false
	}
	return o.Key, true
}

// HasKey returns a boolean if a field has been set.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) HasKey() bool {
	if o != nil && !IsNil(o.Key) {
		return true
	}

	return false
}

// SetKey gets a reference to the given string and assigns it to the Key field.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) SetKey(v string) {
	o.Key = &v
}

// GetNewKey returns the NewKey field value if set, zero value otherwise.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) GetNewKey() string {
	if o == nil || IsNil(o.NewKey) {
		var ret string
		return ret
	}
	return *o.NewKey
}

// GetNewKeyOk returns a tuple with the NewKey field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) GetNewKeyOk() (*string, bool) {
	if o == nil || IsNil(o.NewKey) {
		return nil, false
	}
	return o.NewKey, true
}

// HasNewKey returns a boolean if a field has been set.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) HasNewKey() bool {
	if o != nil && !IsNil(o.NewKey) {
		return true
	}

	return false
}

// SetNewKey gets a reference to the given string and assigns it to the NewKey field.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) SetNewKey(v string) {
	o.NewKey = &v
}

// GetValue returns the Value field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) GetValue() interface{} {
	if o == nil {
		var ret interface{}
		return ret
	}
	return o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) GetValueOk() (*interface{}, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return &o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given interface{} and assigns it to the Value field.
func (o *RenameKeyWhereValueEqRenameKeyWhereValueEq) SetValue(v interface{}) {
	o.Value = v
}

func (o RenameKeyWhereValueEqRenameKeyWhereValueEq) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RenameKeyWhereValueEqRenameKeyWhereValueEq) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Key) {
		toSerialize["key"] = o.Key
	}
	if !IsNil(o.NewKey) {
		toSerialize["new_key"] = o.NewKey
	}
	if o.Value != nil {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableRenameKeyWhereValueEqRenameKeyWhereValueEq struct {
	value *RenameKeyWhereValueEqRenameKeyWhereValueEq
	isSet bool
}

func (v NullableRenameKeyWhereValueEqRenameKeyWhereValueEq) Get() *RenameKeyWhereValueEqRenameKeyWhereValueEq {
	return v.value
}

func (v *NullableRenameKeyWhereValueEqRenameKeyWhereValueEq) Set(val *RenameKeyWhereValueEqRenameKeyWhereValueEq) {
	v.value = val
	v.isSet = true
}

func (v NullableRenameKeyWhereValueEqRenameKeyWhereValueEq) IsSet() bool {
	return v.isSet
}

func (v *NullableRenameKeyWhereValueEqRenameKeyWhereValueEq) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRenameKeyWhereValueEqRenameKeyWhereValueEq(val *RenameKeyWhereValueEqRenameKeyWhereValueEq) *NullableRenameKeyWhereValueEqRenameKeyWhereValueEq {
	return &NullableRenameKeyWhereValueEqRenameKeyWhereValueEq{value: val, isSet: true}
}

func (v NullableRenameKeyWhereValueEqRenameKeyWhereValueEq) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRenameKeyWhereValueEqRenameKeyWhereValueEq) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


