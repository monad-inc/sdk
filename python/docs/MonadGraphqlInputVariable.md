# MonadGraphqlInputVariable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from monad.models.monad_graphql_input_variable import MonadGraphqlInputVariable

# TODO update the JSON string below
json = "{}"
# create an instance of MonadGraphqlInputVariable from a JSON string
monad_graphql_input_variable_instance = MonadGraphqlInputVariable.from_json(json)
# print the JSON string representation of the object
print(MonadGraphqlInputVariable.to_json())

# convert the object into a dict
monad_graphql_input_variable_dict = monad_graphql_input_variable_instance.to_dict()
# create an instance of MonadGraphqlInputVariable from a dict
monad_graphql_input_variable_from_dict = MonadGraphqlInputVariable.from_dict(monad_graphql_input_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


