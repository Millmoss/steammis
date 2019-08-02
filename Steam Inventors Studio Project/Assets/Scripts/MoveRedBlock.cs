using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveRedBlock : MonoBehaviour
{


    // Start is called before the first frame update
    void Start()
    {
         
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey("up"))
        {
            transform.position += new Vector3(-.1f, 0f, 0f);
        }

        if (Input.GetKey("down"))
        {
            transform.position += new Vector3(.1f, 0f, 0f);
        }

        if (Input.GetKey("left"))
        {
            transform.position += new Vector3(.0f, 0f, -.1f);
        }

        if (Input.GetKey("right"))
        {
            transform.position += new Vector3(.0f, 0f, .1f);
        }
    }
}