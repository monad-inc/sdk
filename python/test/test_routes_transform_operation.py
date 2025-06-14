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

from monad.models.routes_transform_operation import RoutesTransformOperation

class TestRoutesTransformOperation(unittest.TestCase):
    """RoutesTransformOperation unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesTransformOperation:
        """Test RoutesTransformOperation
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesTransformOperation`
        """
        model = RoutesTransformOperation()
        if include_optional:
            return RoutesTransformOperation(
                arguments = {
                    'key' : null
                    },
                operation = ''
            )
        else:
            return RoutesTransformOperation(
        )
        """

    def testRoutesTransformOperation(self):
        """Test RoutesTransformOperation"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
