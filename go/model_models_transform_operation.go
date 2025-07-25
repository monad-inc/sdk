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

// checks if the ModelsTransformOperation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ModelsTransformOperation{}

// ModelsTransformOperation struct for ModelsTransformOperation
type ModelsTransformOperation struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Operation *string `json:"operation,omitempty"`
}

// NewModelsTransformOperation instantiates a new ModelsTransformOperation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewModelsTransformOperation() *ModelsTransformOperation {
	this := ModelsTransformOperation{}
	return &this
}

// NewModelsTransformOperationWithDefaults instantiates a new ModelsTransformOperation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewModelsTransformOperationWithDefaults() *ModelsTransformOperation {
	this := ModelsTransformOperation{}
	return &this
}

// GetArguments returns the Arguments field value if set, zero value otherwise.
func (o *ModelsTransformOperation) GetArguments() map[string]interface{} {
	if o == nil || IsNil(o.Arguments) {
		var ret map[string]interface{}
		return ret
	}
	return o.Arguments
}

// GetArgumentsOk returns a tuple with the Arguments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsTransformOperation) GetArgumentsOk() (map[string]interface{}, bool) {
	if o == nil || IsNil(o.Arguments) {
		return map[string]interface{}{}, false
	}
	return o.Arguments, true
}

// HasArguments returns a boolean if a field has been set.
func (o *ModelsTransformOperation) HasArguments() bool {
	if o != nil && !IsNil(o.Arguments) {
		return true
	}

	return false
}

// SetArguments gets a reference to the given map[string]interface{} and assigns it to the Arguments field.
func (o *ModelsTransformOperation) SetArguments(v map[string]interface{}) {
	o.Arguments = v
}

// GetOperation returns the Operation field value if set, zero value otherwise.
func (o *ModelsTransformOperation) GetOperation() string {
	if o == nil || IsNil(o.Operation) {
		var ret string
		return ret
	}
	return *o.Operation
}

// GetOperationOk returns a tuple with the Operation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsTransformOperation) GetOperationOk() (*string, bool) {
	if o == nil || IsNil(o.Operation) {
		return nil, false
	}
	return o.Operation, true
}

// HasOperation returns a boolean if a field has been set.
func (o *ModelsTransformOperation) HasOperation() bool {
	if o != nil && !IsNil(o.Operation) {
		return true
	}

	return false
}

// SetOperation gets a reference to the given string and assigns it to the Operation field.
func (o *ModelsTransformOperation) SetOperation(v string) {
	o.Operation = &v
}

func (o ModelsTransformOperation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ModelsTransformOperation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Arguments) {
		toSerialize["arguments"] = o.Arguments
	}
	if !IsNil(o.Operation) {
		toSerialize["operation"] = o.Operation
	}
	return toSerialize, nil
}

type NullableModelsTransformOperation struct {
	value *ModelsTransformOperation
	isSet bool
}

func (v NullableModelsTransformOperation) Get() *ModelsTransformOperation {
	return v.value
}

func (v *NullableModelsTransformOperation) Set(val *ModelsTransformOperation) {
	v.value = val
	v.isSet = true
}

func (v NullableModelsTransformOperation) IsSet() bool {
	return v.isSet
}

func (v *NullableModelsTransformOperation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableModelsTransformOperation(val *ModelsTransformOperation) *NullableModelsTransformOperation {
	return &NullableModelsTransformOperation{value: val, isSet: true}
}

func (v NullableModelsTransformOperation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableModelsTransformOperation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


