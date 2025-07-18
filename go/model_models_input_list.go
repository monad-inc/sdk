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

// checks if the ModelsInputList type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ModelsInputList{}

// ModelsInputList struct for ModelsInputList
type ModelsInputList struct {
	Inputs []ModelsInput `json:"inputs,omitempty"`
	Pagination *ModelsPagination `json:"pagination,omitempty"`
}

// NewModelsInputList instantiates a new ModelsInputList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewModelsInputList() *ModelsInputList {
	this := ModelsInputList{}
	return &this
}

// NewModelsInputListWithDefaults instantiates a new ModelsInputList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewModelsInputListWithDefaults() *ModelsInputList {
	this := ModelsInputList{}
	return &this
}

// GetInputs returns the Inputs field value if set, zero value otherwise.
func (o *ModelsInputList) GetInputs() []ModelsInput {
	if o == nil || IsNil(o.Inputs) {
		var ret []ModelsInput
		return ret
	}
	return o.Inputs
}

// GetInputsOk returns a tuple with the Inputs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsInputList) GetInputsOk() ([]ModelsInput, bool) {
	if o == nil || IsNil(o.Inputs) {
		return nil, false
	}
	return o.Inputs, true
}

// HasInputs returns a boolean if a field has been set.
func (o *ModelsInputList) HasInputs() bool {
	if o != nil && !IsNil(o.Inputs) {
		return true
	}

	return false
}

// SetInputs gets a reference to the given []ModelsInput and assigns it to the Inputs field.
func (o *ModelsInputList) SetInputs(v []ModelsInput) {
	o.Inputs = v
}

// GetPagination returns the Pagination field value if set, zero value otherwise.
func (o *ModelsInputList) GetPagination() ModelsPagination {
	if o == nil || IsNil(o.Pagination) {
		var ret ModelsPagination
		return ret
	}
	return *o.Pagination
}

// GetPaginationOk returns a tuple with the Pagination field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsInputList) GetPaginationOk() (*ModelsPagination, bool) {
	if o == nil || IsNil(o.Pagination) {
		return nil, false
	}
	return o.Pagination, true
}

// HasPagination returns a boolean if a field has been set.
func (o *ModelsInputList) HasPagination() bool {
	if o != nil && !IsNil(o.Pagination) {
		return true
	}

	return false
}

// SetPagination gets a reference to the given ModelsPagination and assigns it to the Pagination field.
func (o *ModelsInputList) SetPagination(v ModelsPagination) {
	o.Pagination = &v
}

func (o ModelsInputList) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ModelsInputList) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Inputs) {
		toSerialize["inputs"] = o.Inputs
	}
	if !IsNil(o.Pagination) {
		toSerialize["pagination"] = o.Pagination
	}
	return toSerialize, nil
}

type NullableModelsInputList struct {
	value *ModelsInputList
	isSet bool
}

func (v NullableModelsInputList) Get() *ModelsInputList {
	return v.value
}

func (v *NullableModelsInputList) Set(val *ModelsInputList) {
	v.value = val
	v.isSet = true
}

func (v NullableModelsInputList) IsSet() bool {
	return v.isSet
}

func (v *NullableModelsInputList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableModelsInputList(val *ModelsInputList) *NullableModelsInputList {
	return &NullableModelsInputList{value: val, isSet: true}
}

func (v NullableModelsInputList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableModelsInputList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


