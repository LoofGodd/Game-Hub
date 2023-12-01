import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"
import React from "react"

const SkeletonGameCard = () => {
  return (
    <Card width="300px" borderRadius={16} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default SkeletonGameCard