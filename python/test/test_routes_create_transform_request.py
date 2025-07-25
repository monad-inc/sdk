# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.routes_create_transform_request import RoutesCreateTransformRequest

class TestRoutesCreateTransformRequest(unittest.TestCase):
    """RoutesCreateTransformRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesCreateTransformRequest:
        """Test RoutesCreateTransformRequest
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesCreateTransformRequest`
        """
        model = RoutesCreateTransformRequest()
        if include_optional:
            return RoutesCreateTransformRequest(
                config = monad.models.models/transform_config.models.TransformConfig(
                    operations = [
                        monad.models.models/transform_operation.models.TransformOperation(
                            arguments = {
                                'key' : null
                                }, 
                            operation = '', )
                        ], ),
                description = '',
                name = ''
            )
        else:
            return RoutesCreateTransformRequest(
                name = '',
        )
        """

    def testRoutesCreateTransformRequest(self):
        """Test RoutesCreateTransformRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
