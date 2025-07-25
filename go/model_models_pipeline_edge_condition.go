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

// checks if the ModelsPipelineEdgeCondition type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ModelsPipelineEdgeCondition{}

// ModelsPipelineEdgeCondition struct for ModelsPipelineEdgeCondition
type ModelsPipelineEdgeCondition struct {
	Config map[string]interface{} `json:"config,omitempty"`
	TypeId *string `json:"type_id,omitempty"`
}

// NewModelsPipelineEdgeCondition instantiates a new ModelsPipelineEdgeCondition object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewModelsPipelineEdgeCondition() *ModelsPipelineEdgeCondition {
	this := ModelsPipelineEdgeCondition{}
	return &this
}

// NewModelsPipelineEdgeConditionWithDefaults instantiates a new ModelsPipelineEdgeCondition object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewModelsPipelineEdgeConditionWithDefaults() *ModelsPipelineEdgeCondition {
	this := ModelsPipelineEdgeCondition{}
	return &this
}

// GetConfig returns the Config field value if set, zero value otherwise.
func (o *ModelsPipelineEdgeCondition) GetConfig() map[string]interface{} {
	if o == nil || IsNil(o.Config) {
		var ret map[string]interface{}
		return ret
	}
	return o.Config
}

// GetConfigOk returns a tuple with the Config field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineEdgeCondition) GetConfigOk() (map[string]interface{}, bool) {
	if o == nil || IsNil(o.Config) {
		return map[string]interface{}{}, false
	}
	return o.Config, true
}

// HasConfig returns a boolean if a field has been set.
func (o *ModelsPipelineEdgeCondition) HasConfig() bool {
	if o != nil && !IsNil(o.Config) {
		return true
	}

	return false
}

// SetConfig gets a reference to the given map[string]interface{} and assigns it to the Config field.
func (o *ModelsPipelineEdgeCondition) SetConfig(v map[string]interface{}) {
	o.Config = v
}

// GetTypeId returns the TypeId field value if set, zero value otherwise.
func (o *ModelsPipelineEdgeCondition) GetTypeId() string {
	if o == nil || IsNil(o.TypeId) {
		var ret string
		return ret
	}
	return *o.TypeId
}

// GetTypeIdOk returns a tuple with the TypeId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineEdgeCondition) GetTypeIdOk() (*string, bool) {
	if o == nil || IsNil(o.TypeId) {
		return nil, false
	}
	return o.TypeId, true
}

// HasTypeId returns a boolean if a field has been set.
func (o *ModelsPipelineEdgeCondition) HasTypeId() bool {
	if o != nil && !IsNil(o.TypeId) {
		return true
	}

	return false
}

// SetTypeId gets a reference to the given string and assigns it to the TypeId field.
func (o *ModelsPipelineEdgeCondition) SetTypeId(v string) {
	o.TypeId = &v
}

func (o ModelsPipelineEdgeCondition) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ModelsPipelineEdgeCondition) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Config) {
		toSerialize["config"] = o.Config
	}
	if !IsNil(o.TypeId) {
		toSerialize["type_id"] = o.TypeId
	}
	return toSerialize, nil
}

type NullableModelsPipelineEdgeCondition struct {
	value *ModelsPipelineEdgeCondition
	isSet bool
}

func (v NullableModelsPipelineEdgeCondition) Get() *ModelsPipelineEdgeCondition {
	return v.value
}

func (v *NullableModelsPipelineEdgeCondition) Set(val *ModelsPipelineEdgeCondition) {
	v.value = val
	v.isSet = true
}

func (v NullableModelsPipelineEdgeCondition) IsSet() bool {
	return v.isSet
}

func (v *NullableModelsPipelineEdgeCondition) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableModelsPipelineEdgeCondition(val *ModelsPipelineEdgeCondition) *NullableModelsPipelineEdgeCondition {
	return &NullableModelsPipelineEdgeCondition{value: val, isSet: true}
}

func (v NullableModelsPipelineEdgeCondition) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableModelsPipelineEdgeCondition) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


