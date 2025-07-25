/*
Monad Swagger API

This is the monad API

API version: 1.0
Contact: support@swagger.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monad

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the RoutesUpdateInputRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutesUpdateInputRequest{}

// RoutesUpdateInputRequest struct for RoutesUpdateInputRequest
type RoutesUpdateInputRequest struct {
	Config *RoutesUpdateInputRequestConfig `json:"config,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Type string `json:"type"`
}

type _RoutesUpdateInputRequest RoutesUpdateInputRequest

// NewRoutesUpdateInputRequest instantiates a new RoutesUpdateInputRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutesUpdateInputRequest(type_ string) *RoutesUpdateInputRequest {
	this := RoutesUpdateInputRequest{}
	this.Type = type_
	return &this
}

// NewRoutesUpdateInputRequestWithDefaults instantiates a new RoutesUpdateInputRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutesUpdateInputRequestWithDefaults() *RoutesUpdateInputRequest {
	this := RoutesUpdateInputRequest{}
	return &this
}

// GetConfig returns the Config field value if set, zero value otherwise.
func (o *RoutesUpdateInputRequest) GetConfig() RoutesUpdateInputRequestConfig {
	if o == nil || IsNil(o.Config) {
		var ret RoutesUpdateInputRequestConfig
		return ret
	}
	return *o.Config
}

// GetConfigOk returns a tuple with the Config field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutesUpdateInputRequest) GetConfigOk() (*RoutesUpdateInputRequestConfig, bool) {
	if o == nil || IsNil(o.Config) {
		return nil, false
	}
	return o.Config, true
}

// HasConfig returns a boolean if a field has been set.
func (o *RoutesUpdateInputRequest) HasConfig() bool {
	if o != nil && !IsNil(o.Config) {
		return true
	}

	return false
}

// SetConfig gets a reference to the given RoutesUpdateInputRequestConfig and assigns it to the Config field.
func (o *RoutesUpdateInputRequest) SetConfig(v RoutesUpdateInputRequestConfig) {
	o.Config = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoutesUpdateInputRequest) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutesUpdateInputRequest) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoutesUpdateInputRequest) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *RoutesUpdateInputRequest) SetDescription(v string) {
	o.Description = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *RoutesUpdateInputRequest) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutesUpdateInputRequest) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *RoutesUpdateInputRequest) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *RoutesUpdateInputRequest) SetName(v string) {
	o.Name = &v
}

// GetType returns the Type field value
func (o *RoutesUpdateInputRequest) GetType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Type
}

// GetTypeOk returns a tuple with the Type field value
// and a boolean to check if the value has been set.
func (o *RoutesUpdateInputRequest) GetTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Type, true
}

// SetType sets field value
func (o *RoutesUpdateInputRequest) SetType(v string) {
	o.Type = v
}

func (o RoutesUpdateInputRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutesUpdateInputRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Config) {
		toSerialize["config"] = o.Config
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	toSerialize["type"] = o.Type
	return toSerialize, nil
}

func (o *RoutesUpdateInputRequest) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"type",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varRoutesUpdateInputRequest := _RoutesUpdateInputRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varRoutesUpdateInputRequest)

	if err != nil {
		return err
	}

	*o = RoutesUpdateInputRequest(varRoutesUpdateInputRequest)

	return err
}

type NullableRoutesUpdateInputRequest struct {
	value *RoutesUpdateInputRequest
	isSet bool
}

func (v NullableRoutesUpdateInputRequest) Get() *RoutesUpdateInputRequest {
	return v.value
}

func (v *NullableRoutesUpdateInputRequest) Set(val *RoutesUpdateInputRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutesUpdateInputRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutesUpdateInputRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutesUpdateInputRequest(val *RoutesUpdateInputRequest) *NullableRoutesUpdateInputRequest {
	return &NullableRoutesUpdateInputRequest{value: val, isSet: true}
}

func (v NullableRoutesUpdateInputRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutesUpdateInputRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


